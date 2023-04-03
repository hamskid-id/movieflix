import { Footer } from "../components/footer"
import { Latest } from "../components/latest"
import { Layout } from "../components/layout"
import { NowPlaying } from "../components/nowPlaying"
import { TopRated } from "../components/topRated"
import { UpComing } from "../components/upcoming"
import { Header } from "./header"
import { Text } from "../components/text"

export const HomeScreen=()=>{
    return(
        <Layout>
            <NowPlaying/>
            <Latest/>
            <TopRated/>
            <UpComing/>
        </Layout>
    )
}