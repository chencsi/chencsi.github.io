import { Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, FormControlLabel, IconButton, Popover } from "@mui/material";
import React, { useEffect } from "react";
import DarkModeSwitch from "../Navigation/ThemeSwitch";
import LanguageSwitch from "../Navigation/LanguageSwitch";
import navItems from "./navItems";
import { Link } from "react-router-dom";

function Navigation() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const isPopoverOpen = Boolean(anchorEl);
	const popoverId = open ? "navigation-settings-popover" : undefined;
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);
	let lastKnownPosition = 0;
	let scrollTicking = false;

	function checkScroll(scrollPos) {
		setIsScrolled(scrollPos > 50);
	}

	document.addEventListener("scroll", () => {
		lastKnownPosition = window.scrollY;

		if (!scrollTicking) {
			scrollTicking = true;
			window.requestAnimationFrame(() => {
				checkScroll(lastKnownPosition);
				scrollTicking = false;
			});
		}
	});

	const handlePopoverClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const NavItems = ({ isMobile }) => {
		return navItems
			.filter((item) => !item.hidden)
			.map((item) => (
				<Link
					key={item.path}
					to={item.path}
					className={
						isMobile
							? "p-2 hover:bg-blue-400 hover:text-black transition-colors duration-300"
							: "p-4 hover:bg-blue-400 hover:text-black transition-colors duration-300"
					}
				>
					{item.title}
				</Link>
			));
	};

	const toggleDrawer = (newOpen) => () => {
		setDrawerOpen(newOpen);
	};

	return (
		<div
			className={
				isScrolled
					? "bg-zinc-900/60 backdrop-blur-xl fixed w-full flex flex-row justify-between px-5 py-3 items-center select-none"
					: "fixed w-full flex flex-row justify-between px-5 py-3 items-center select-none transition-[]"
			}
			id="navigation"
		>
			<div className="flex flex-row items-baseline">
				<Link to="/">
					<h1 className="text-5xl font-extrabold uppercase">
						<span className="text-blue-400">K</span>
						<span className="text-4xl">c</span>
					</h1>
				</Link>
			</div>
			<div className="flex flex-row items-center sm:hidden">
				<IconButton onClick={toggleDrawer(true)}>
					<MenuIcon sx={{ color: "white", fontSize: "24pt" }} />
				</IconButton>
				<Drawer
					open={drawerOpen}
					onClose={toggleDrawer(false)}
					anchor="right"
					sx={{
						backdropFilter: "blur(5px)"
					}}
				>
					<div className="h-full w-full flex flex-col bg-zinc-800 text-white">
						{NavItems(true)}
					</div>
				</Drawer>
			</div>
			<div className="hidden sm:flex flex-row">
				{NavItems(false)}
				<IconButton
					sx={{
						color: isPopoverOpen
							? "rgb(66, 165, 245)"
							: "rgba(255, 255, 255, 0.87)",
						transform: isPopoverOpen ? "rotate(90deg)" : "none",
						transition: "transform 300ms, color 300ms",
						"&:hover": {
							transform: "rotate(90deg)",
						},
					}}
					onClick={handlePopoverClick}
				>
					<Settings />
				</IconButton>
			</div>
			<Popover
				id={popoverId}
				open={isPopoverOpen}
				anchorEl={anchorEl}
				onClose={handlePopoverClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<div className="bg-white p-1 select-none scale-[90%]">
					<div className="flex flex-row items-center justify-between">
						<FormControlLabel
							control={<DarkModeSwitch sx={{ m: 1 }} defaultChecked />}
							label="Téma"
							labelPlacement="start"
						/>
					</div>
					<div className="flex flex-row items-center justify-between">
						<FormControlLabel
							control={<LanguageSwitch sx={{ m: 1 }} defaultChecked />}
							label="Nyelv"
							labelPlacement="start"
						/>
					</div>
				</div>
			</Popover>
		</div>
	);
}

export default Navigation;
