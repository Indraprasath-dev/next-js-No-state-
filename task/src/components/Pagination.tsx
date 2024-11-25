"use client";

import { useEffect, useState, useRef } from "react";
import { fetchData } from "@/apiService/api";
import MemberList from "./MemberCard";

interface User {
    uid: string;
    name: string;
    email: string;
    imageUid: string;
    githubHandler: string | null;
    discordHandler: string | null;
    twitterHandler: string | null;
    linkedinHandler: string | null;
    telegramHandler: string | null;
    officeHours: string | null;
    moreDetails: string | null;
    bio: string | null;
    plnFriend: boolean;
    plnStartDate: string;
    airtableRecId: string;
    externalId: string;
    openToWork: boolean;
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
    approvedAt: string;
    locationUid: string;
    preferences: string | null;
    region?: string;
    country?: string;
    engagementType?: string;
}

interface MemberFilterProps {
    initialUsers: User[];
    region?: string;
    country?: string;
    officeHours?: boolean;
    openToCollaborate?: boolean;
    friends?: boolean;
    newMember?: boolean;
}

const Pagination = ({initialUsers, region, country, officeHours, openToCollaborate, friends, newMember, }: MemberFilterProps) => {   

    const observer = useRef<IntersectionObserver | null>(null);

    const [state, setState] = useState({
        users: initialUsers,
        loading: false,
        page: 2,
        hasMore: true
    });


    const loadMoreUsers = async () => {
        if (state.loading || !state.hasMore) return;
        
        setState((prev) => ({ ...prev, loading: true }));

        const newUsers = await fetchData(state.page);
        setState((prev) => ({
            ...prev,
            users: [...prev.users, ...newUsers],
            loading: false,
            page: prev.page + 1,
            hasMore: newUsers.length > 0
        }));

    };

    useEffect(() => {
        const handleScroll = () => {
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        loadMoreUsers();
                    }
                },
                { threshold: 1.0 }
            );

            const triggerElement = document.getElementById("scroll-trigger");
            if (triggerElement) {
                observer.current.observe(triggerElement);
            }
        };

        handleScroll();
    }, [state.users, state.loading, state.hasMore]);

    const filteredMembers = state.users.filter((member) => {
        const matchesRegion = region ? member.region === region : true;
        const matchesCountry = country ? member.country === country : true;

        const matchesEngagementType =
            (officeHours && member.engagementType === "OfficeHours") ||
            (openToCollaborate && member.engagementType === "OpenToCollaborate") ||
            (friends && member.engagementType === "Friends") ||
            (newMember && member.engagementType === "NewMember");

        return (
            matchesRegion && matchesCountry &&
            (matchesEngagementType || (!officeHours && !openToCollaborate && !friends && !newMember))
        );
    });

    return (
        <MemberList members={filteredMembers} loading={state.loading} />
    );
};

export default Pagination;
