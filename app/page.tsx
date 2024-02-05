import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Button>Hello</Button>
      <div>
        <UserButton />
      </div>
    </>
  );
}
