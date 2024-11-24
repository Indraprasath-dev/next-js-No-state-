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

interface MemberListProps {
    members: User[];
    loading: boolean;
}

const MemberCard = ({ members, loading }: MemberListProps) => {

    return (
        <>
            <div className="member__card-wrapper">
                <div className="member__card">
                    {members.map((item) => (
                        <div key={item.uid} className="member__list card">
                            <div className="member__image-container">
                                <div className="member__image">
                                    <img src="./photo.jpg" alt="photo" />
                                </div>
                            </div>
                            <div className="member__details">
                                <div className="member__name">{item.name}</div>
                                <div className="member__department">{item.region}</div>
                                <div className="member__department">{item.country}</div>
                                <div className="member__role">{item.engagementType}</div>
                            </div>
                            <div className="member__divider"></div>
                            <div className="member__product-container">
                                <span className="member__product-span"></span>
                                <div className="member__product">Engineering</div>
                            </div>
                        </div>
                    ))}
                    <div id="scroll-trigger" className="infinite__scroll-trigger"></div>
                </div>
                <div className="flex justify-center m-5">
                    {loading && <div>Loading...</div>}
                </div>
                
            </div>
        </>
    );
};

export default MemberCard;
