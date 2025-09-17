import PrimaryButton from "../components/PrimaryButton";

function NotFound() {
	return (
			<div className="h-[70vh] flex flex-col items-center justify-center gap-3">
				<h1 className="text-4xl font-extrabold">Hoppá!</h1>
				<p>Sajnos az általad keresett oldal nem létezik. :(</p>
				<PrimaryButton link="/">
          Vissza a főoldalra
        </PrimaryButton>
			</div>
	);
}

export default NotFound;
