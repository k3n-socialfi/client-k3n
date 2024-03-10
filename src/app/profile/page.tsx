import UserProfile from "@/modules/profile/view/profile";

export default function ProfilePage() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ background: "#FFFFFF", width: "20%" }}>Navigation...</div>
            <div style={{ width: "80%", background: "#161616 " }}>
                <UserProfile />
            </div>
        </div>
    );
}
