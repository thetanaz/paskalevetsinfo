"use client";
import logo from "@/public/logo.png";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header>
      <nav className="justify-between  rounded-b-3xl items-center mx-auto gap-x-2 hidden sm:flex bg-green-100 pb-5 sm:flex-col sm:gap-y-2">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} width={220} height={110} alt="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-x-2 mx-auto">
          <Link href="/" className={buttonVariants({ variant: "default" })}>
            Начало
          </Link>

          <Link
            href="/history"
            className={buttonVariants({ variant: "default" })}
          >
            История на селото
          </Link>
          <Link
            href="/gallery"
            className={buttonVariants({ variant: "default" })}
          >
            Галерия
          </Link>
          <Link href="/qna" className={buttonVariants({ variant: "default" })}>
            Въпроси и Отговори
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default" })}
          >
            Контакти
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex justify-between bg-green-100 mb-5  items-center mx-auto p-4">
        {/* Logo Section for Mobile */}
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <Image src={logo} width={120} height={60} alt="logo" />
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu className="w-[40px] h-[40px] p-[5px] text-green-900" />
          </SheetTrigger>
          <SheetContent className="w-screen h-[350px]">
            <SheetTitle className="text-center mb-2 font-medium tracking-wider text-xl">
              МЕНЮ
            </SheetTitle>
            <div className="flex flex-col gap-y-3 w-[80%] mx-auto">
              <Link
                href="/"
                onClick={handleClose}
                className={buttonVariants({ variant: "default" })}
              >
                Начало
              </Link>

              <Link
                href="/history"
                onClick={handleClose}
                className={buttonVariants({ variant: "default" })}
              >
                История на селото
              </Link>
              <Link
                href="/gallery"
                onClick={handleClose}
                className={buttonVariants({ variant: "default" })}
              >
                Галерия
              </Link>
              <Link
                href="/qna"
                onClick={handleClose}
                className={buttonVariants({ variant: "default" })}
              >
                Въпроси и Отговори
              </Link>
              <Link
                href="/contact"
                onClick={handleClose}
                className={buttonVariants({ variant: "default" })}
              >
                Контакти
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        {/* Navigation Menu */}
      </div>
    </header>
  );
}
