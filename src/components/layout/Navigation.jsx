import { Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, FormControlLabel, IconButton, Popover } from "@mui/material";
import React from "react";
import DarkModeSwitch from "../Navigation/ThemeSwitch";
import LanguageSwitch from "../Navigation/LanguageSwitch";
import navItems from "./navItems";
import { Link } from "react-router-dom";
import useUI from "../../hooks/useUI";
import { useEffect } from "react";
import { useState } from "react";
import translations from "../../utils/translations";
import useLanguageSwitch from "../../hooks/useLanguageSwitch";

function Navigation() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const isPopoverOpen = Boolean(anchorEl);
	const popoverId = open ? "navigation-settings-popover" : undefined;
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);
	const { theme, toggleTheme, lang } = useUI();
	const [isLoaded, setIsLoaded] = useState(false);
	const [checked, handleLangSwitch] = useLanguageSwitch();
	const content = translations[lang]?.layout?.nav;
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
					className={`${isMobile ? "p-2" : "p-4"} hover:bg-blue-400 hover:text-zinc-900 transition-[background-color] duration-300`}
				>
					{content?.links?.[item.name] ?? item.name}
				</Link>
			));
	};

	const toggleDrawer = (newOpen) => () => {
		setDrawerOpen(newOpen);
	};

	useEffect(() => {
		setTimeout(() => setIsLoaded(true), 100);
	}, []);

	return (
		<div
			id="navigation"
			className={`
				fixed z-50 w-full flex flex-row justify-between px-5 py-3 items-center select-none
				${isScrolled ? "backdrop-blur-sm" : ""}
				${isScrolled && theme === "dark" ? "bg-zinc-800/40" : ""}
				${isScrolled && theme === "light" ? "bg-zinc-100/40" : ""}
				${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}
				${isLoaded ? "transition-[background-color] duration-300" : ""}
				`}
		>
			<div className="flex flex-row items-baseline">
				<Link to="/">
					<h1 className="text-5xl font-extrabold uppercase">
						<span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500">
							K
						</span>
						<span
							className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-700"} text-4xl`}
						>
							c
						</span>
					</h1>
				</Link>
			</div>
			<div className="flex flex-row items-center sm:hidden">
				<IconButton onClick={toggleDrawer(true)}>
					<MenuIcon
						sx={{
							color: theme === "dark" ? "grey.100" : "grey.800",
							fontSize: "24pt",
						}}
					/>
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
						transition: "transform 300ms",
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
					horizontal: "right",
				}}
				PaperProps={{
					sx: {
						mt: 1.5,
					},
				}}
			>
				<div className="bg-zinc-100 py-3 pl-3 pr-5 select-none flex flex-col gap-3 min-w-[170px]">
					<FormControlLabel
						control={<DarkModeSwitch checked={theme === "dark"} />}
						label={content?.settings.darkmode}
						labelPlacement="start"
						sx={{ ml: "auto" }}
						onClick={toggleTheme}
					/>
					<FormControlLabel
						control={
							<LanguageSwitch checked={checked} onChange={handleLangSwitch} />
						}
						label={content?.settings.language}
						labelPlacement="start"
						sx={{ ml: "auto" }}
					/>
				</div>
			</Popover>
		</div>
	);
}

export default Navigation;
