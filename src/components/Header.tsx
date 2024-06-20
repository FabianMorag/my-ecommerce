'use client'

import '@fontsource-variable/dancing-script';
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import Link from "next/link";
import MyEcommerceLogo from "./icons/MyEcommerceLogo";
import Search from "./icons/Search";

export default function Header() {
  const pathName = usePathname()

  return (
    <Navbar className="fixed w-[90%] xl:w-full xl:max-w-screen-xl m-auto rounded-b-xl bg-[rgb(var(--my-bg-color))]" isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3">
          <Link className='flex gap-2 p-3 text-gray-900' href="/">
            <span className='content-center text-gray-700'>
              <MyEcommerceLogo size={24} />
            </span>
            <p
              className="hidden text-2xl font-bold md:block"
              style={{
                fontFamily: `'Dancing Script Variable', cursive`,
                fontWeight: 700
              }}>
              My Ecommerce
            </p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden gap-3 md:flex">
          <NavbarItem isActive={pathName === '/'}>
            <Link color="foreground" href="/" className={`${pathName === '/' ? 'text-rose-700 font-semibold' : ''}`}>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <Input
          classNames={{
            base: "max-w-full md:max-w-[14rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full shadow-gray-400"
          }}
          placeholder="Search..."
          size="md"
          startContent={<Search size={18} />}
          type="search"
          onChange={(e) => console.log(e.target.value)}
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button className='w-16 p-1 bg-transparent border rounded-full min-w-11 border-rose-700'>
              <img className='rounded-full' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="gap-2 h-14 [&>span]:font-semibold">
              Signed in as <br /> zoey@example.com
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar >
  );
}
