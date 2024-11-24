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

interface ClientMemberProps {
    region?: string;
    country?: string;
    officeHours?: boolean;
    openToCollaborate?: boolean;
    friends?: boolean;
    newMember?: boolean;
}

const Pagination = ({region, country, officeHours, openToCollaborate, friends, newMember, }: ClientMemberProps) => {   

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const observer = useRef<IntersectionObserver | null>(null);

    const loadMoreUsers = async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        const newUsers = await fetchData(page);
        setUsers((prev) => [...prev, ...newUsers]);
        setLoading(false);
        setPage((prev) => prev + 1);

        if (newUsers.length === 0) {
            setHasMore(false);
        }
    };

    useEffect(() => {
        loadMoreUsers();
    }, []);

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
    }, [users, loading, hasMore]);

    const filteredMembers = users.filter((member) => {
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
        <MemberList members={filteredMembers} loading={loading} />
    );
};

export default Pagination;
