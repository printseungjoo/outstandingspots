import 'leaflet/dist/leaflet.css'
import { CatchAllClient } from './CatchAllClient'

export function generateStaticParams() {
    return [
        { slug: [] }
    ]
}

export default function Page() {
    return <CatchAllClient />
}
