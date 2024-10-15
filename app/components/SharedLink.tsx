import { Icon } from "./Icon";
import { formatRelativeTime } from "~/lib/dateHelpers";

interface SharedLinkProps {
  isAuthenticated: boolean;
  currentUserVote: "UP" | "DOWN" | null;
  numberOfComments: number;
  favorited: boolean;
  id: string;
  title: string;
  countVotes: number;
  submittedBy: {
    id: string;
    firstName: string;
    lastName: string;
    nickname: string;
  };
  lastUpdated: string;
  url: string;
}

const SharedLink = ({
  isAuthenticated,
  currentUserVote,
  numberOfComments,
  favorited,
  id,
  title,
  countVotes,
  submittedBy,
  lastUpdated,
  url,
}: SharedLinkProps) => {
  const handleVote = (direction: "UP" | "DOWN") => {};

  const handleRemoveFavorite = () => {};

  const handleFavorite = () => {};

  return (
    <div className="shared-link flex w-full gap-x-5 pb-6 pl-4 pr-8 pt-8">
      {/* vote */}
      <div className="flex flex-col">
        {isAuthenticated && (
          <>
            <button
              className={`up ${currentUserVote === "UP" ? "filled" : ""}`}
              onClick={() => handleVote("UP")}
              data-testid="voteUpButton"
            >
              <Icon id="up" />
            </button>
            <button
              className={`down ${currentUserVote === "DOWN" ? "filled" : ""}`}
              onClick={() => handleVote("DOWN")}
              data-testid="voteDownButton"
            >
              <Icon id="up" className="rotate-180" />
            </button>
          </>
        )}
      </div>

      {/* content */}
      <div className="flex-1">
        <h2 className="font-condensed text-6xl uppercase leading-[0.8]">
          <a href={`/link/${id}`} className="text-cinder dark:text-icterine">
            {title}
          </a>
        </h2>
        <div className="text-medium font-sans text-sm dark:text-icterine">
          <strong>
            {countVotes} point{countVotes > 1 && "s"}{" "}
          </strong>
          {submittedBy.firstName && submittedBy.lastName && (
            <>
              • submitted by{" "}
              <a
                href={`/profile/${submittedBy.nickname}`}
                className="font-bold underline hover:no-underline"
              >
                {submittedBy.firstName} {submittedBy.lastName}
              </a>{" "}
            </>
          )}
          • {formatRelativeTime(lastUpdated)} •{" "}
          <a
            href={`/link/${id}`}
            className="font-bold underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            {numberOfComments} comment{numberOfComments > 1 && "s"}
          </a>{" "}
          •{" "}
          {favorited && isAuthenticated ? (
            <button
              className="item-center relative top-1 inline-flex gap-1 underline"
              onClick={handleRemoveFavorite}
            >
              <Icon id="heart--filled" size={20} /> Favorited
            </button>
          ) : (
            <button
              className="item-center relative top-1 inline-flex gap-1 underline"
              onClick={handleFavorite}
            >
              <Icon id="heart--empty" size={20} /> Mark as favorite
            </button>
          )}
        </div>
      </div>

      {/* arrow */}
      <a
        href={url}
        className="text-cinder dark:text-icterine"
        target="_blank"
        rel="noreferrer"
        data-testid="sharedLinkUrl"
      >
        <Icon id="arrow" className="relative top-2 w-14" />
      </a>
    </div>
  );
};

export { SharedLink };
