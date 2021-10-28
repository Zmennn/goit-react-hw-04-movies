import { useRouteMatch } from "react-router"


export default function MovieDetailsPage() {
    const { url } = useRouteMatch();
    console.table(url);
    return (
        <h1>MovieDetailsPage</h1>
    )
}