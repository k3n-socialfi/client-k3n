import UserProfile from "@/modules/profile/view/profile";

export default function ProfilePage() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ background: "pink", width: "20%" }}>Navigation...</div>
            <div style={{ width: "80%" }}>
                <UserProfile />
            </div>
        </div>
    );
}
