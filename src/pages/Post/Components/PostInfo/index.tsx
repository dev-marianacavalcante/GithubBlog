import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/externalLink";
import { IPost } from "../../../Home";
import { Spinner } from "../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}
export function PostInfo({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  const formmattedDate = relativeDateFormatter(postData?.created_at);
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} /> {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} /> {formmattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} /> {postData.comments}{" "}
              comentários
            </li>
          </ul>
        </>
      )}
    </Container>
  );
}
