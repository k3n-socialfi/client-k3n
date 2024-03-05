import UserProfile from "@/modules/profile/view/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{display: "flex"}}>
          <div style={{width: "70%"}}>
            <UserProfile/>
          </div>
        </div>
    </main>
  );
}
