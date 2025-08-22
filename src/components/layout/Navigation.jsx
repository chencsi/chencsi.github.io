import { Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, FormControlLabel, IconButton, Popover } from "@mui/material";
import React from "react";
import DarkModeSwitch from "../Navigation/ThemeSwitch";
import LanguageSwitch from "../Navigation/LanguageSwitch";
import navItems from "./navItems";
import { Link } from "react-router-dom";
import useUI from "../../hooks/useUI";

function Navigation() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const isPopoverOpen = Boolean(anchorEl);
	const popoverId = open ? "navigation-settings-popover" : undefined;
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);
	const { theme, toggleTheme, lang } = useUI();
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
							? "p-2 hover:bg-blue-400 hover:text-black"
							: "p-4 hover:bg-blue-400 hover:text-black"
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
			id="navigation"
			className={`
				fixed w-full flex flex-row justify-between px-5 py-3 items-center select-none transition duration-300
				${isScrolled ? "backdrop-blur-sm" : ""}
				${isScrolled && theme === "dark" ? "bg-zinc-800/50" : ""}
				${isScrolled && theme === "light" ? "bg-zinc-100/50" : ""}
				${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}
				`}
		>
			<div className="flex flex-row items-baseline">
				<Link to="/">
					<h1 className="text-5xl font-extrabold uppercase">
						<span className="text-blue-400">K</span>
						<span className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-700"} text-blue-100 text-4xl`}>c</span>
					</h1>
				</Link>
			</div>
			<div className="flex flex-row items-center sm:hidden">
				<IconButton onClick={toggleDrawer(true)}>
					<MenuIcon sx={{ fontSize: "24pt" }} />
				</IconButton>
				<Drawer
					open={drawerOpen}
					onClose={toggleDrawer(false)}
					anchor="right"
					sx={{
						backdropFilter: "blur(5px)",
					}}
				>
					<div
						className={`h-full w-full flex flex-col ${theme === "dark" ? "bg-zinc-800 text-zinc-200" : "bg-zinc-200 text-zinc-800"}`}
					>
						{NavItems(true)}
					</div>
				</Drawer>
			</div>
			<div className="hidden sm:flex flex-row">
				{NavItems(false)}
				<IconButton
					sx={{
						transform: isPopoverOpen ? "rotate(90deg)" : "none",
						transition: "transform 300ms, color 300ms",
						"&:hover": {
							transform: "rotate(90deg)",
						},
						color: theme === "dark" ? "white" : "black",
					}}
					onClick={handlePopoverClick}
					disableRipple
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
				<div className="bg-zinc-100 py-3 pl-3 pr-5 select-none flex flex-col gap-3">
					<FormControlLabel
						control={<DarkModeSwitch checked={theme === "dark"} />}
						label="Sötét mód"
						labelPlacement="start"
						sx={{ ml: "auto" }}
						onClick={toggleTheme}
					/>
					<FormControlLabel
						control={<LanguageSwitch defaultChecked />}
						label="Nyelv"
						labelPlacement="start"
						sx={{ ml: "auto" }}
					/>
				</div>
			</Popover>
		</div>
	);
}

export default Navigation;
