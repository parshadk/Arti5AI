import Image from "next/image";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import logo from "./../public/txtlogo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="flex flex-row ">
          <Image src={logo} alt="logo" width={100} height={50} className="rounded-md"></Image>
        </div>
        <div className="flex flex-row flex-end">
          <NavigationMenu className="flex flex-row flex-end">
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>

            <Link href="/billing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Get Started
              </NavigationMenuLink>
            </Link>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
