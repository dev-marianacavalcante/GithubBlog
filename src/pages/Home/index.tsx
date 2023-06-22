import { PostCards } from "./components/PostCards";
import { Profile } from "./components/Profile";
import { Search } from "./components/SearchPublications";
import { PostContainer } from "./styles";

export function Home() {
    return(
        <>
                <Profile/>
                <Search/>
            <PostContainer>
                <PostCards/>
                <PostCards/>
            </PostContainer>
        </>
    )
}