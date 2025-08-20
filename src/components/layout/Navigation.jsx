import { Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Drawer,
	FormControlLabel,
	IconButton,
	Popover,
} from "@mui/material";
import React from "react";
import DarkModeSwitch from "../navigation/ThemeSwitch";
import LanguageSwitch from "../navigation/LanguageSwitch";

const navItems = [
	{
		path: "/",
		title: "Főoldal",
		hidden: false,
	},
	{
		path: "/referencies",
		title: "Referenciák",
		hidden: false,
	},
	{
		path: "/contact",
		title: "Kapcsolat",
		hidden: false,
	},
];

function Navigation() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const isPopoverOpen = Boolean(anchorEl);
	const popoverId = open ? "navigation-settings-popover" : undefined;
	const [drawerOpen, setDrawerOpen] = React.useState(false);

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
				<a
					key={item.path}
					href={item.path}
					className={isMobile
						? "p-2 hover:bg-blue-400 hover:text-black transition-colors duration-300"
						: "p-5 hover:bg-blue-400 hover:text-black transition-colors duration-300"
					}
				>
					{item.title}
				</a>
			));
	};

	const toggleDrawer = (newOpen) => () => {
		setDrawerOpen(newOpen);
	};

	return (
		<div className="flex flex-row justify-between p-4 items-center select-none">
			<div className="flex flex-row items-baseline">
				<h1 className="text-5xl font-extrabold uppercase text-blue-400">K</h1>
				<h1 className="text-4xl font-extrabold uppercase">C</h1>
			</div>
			<div className="flex flex-row items-center sm:hidden">
				<IconButton onClick={toggleDrawer(true)}>
					<MenuIcon sx={{ color: "white", fontSize: "24pt" }} />
				</IconButton>
				<Drawer
					open={drawerOpen}
					onClose={toggleDrawer(false)}
					anchor="right"
					sx={{ backdropFilter: "blur(10px)" }}
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
							color: "rgb(66, 165, 245)",
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
