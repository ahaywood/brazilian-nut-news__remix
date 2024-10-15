import { useLocation } from "@remix-run/react";
import { Icon } from "./Icon";

interface ProfileHeaderProps {
  userByNickname: {
    id: string;
    firstName: string;
    lastName: string;
    nickname: string;
    email: string;
    github: string;
    facebook: string;
    youtube: string;
    linkedin: string;
    twitter: string;
  };
  currentUser: {
    id: string;
  };
}

const ProfileHeader = ({ userByNickname, currentUser }: ProfileHeaderProps) => {
  const location = useLocation();

  const isCurrentPage = (path: string): boolean => {
    if (location.pathname === path) {
      return true;
    }
    return false;
  };

  return (
    <div className="border-b-2 border-b-icterine pb-2">
      <h1 className="max-w-screen overflow-hidden pt-6 text-[19em] leading-[.8] text-white">
        <span className="tex-white outline">{userByNickname.firstName}</span>{" "}
        <span className="text-fountainBlue">{userByNickname.lastName}</span>
      </h1>

      <div className="flex flex-col items-start justify-between pr-5 md:flex-row md:items-center">
        <nav>
          <ul className="flex flex-col justify-start text-left font-condensed text-3xl uppercase text-fountainBlue md:flex-row md:gap-11 md:text-4xl lg:text-6xl">
            <li>
              <a
                className={`hover:text-white ${
                  isCurrentPage(`/profile/${userByNickname.nickname}`) &&
                  "text-icterine"
                }`}
                href={`/profile/${userByNickname.nickname}`}
              >
                Links Shared
              </a>
            </li>
            <li>
              <a
                className={`hover:text-white  ${
                  isCurrentPage(
                    `/profile/${userByNickname.nickname}/comments`
                  ) && "text-icterine"
                }`}
                href={`/profile/${userByNickname.nickname}/comments`}
              >
                Comments
              </a>
            </li>
            <li>
              <a
                className={`hover:text-white  ${
                  isCurrentPage(
                    `/profile/${userByNickname.nickname}/favorites`
                  ) && "text-icterine"
                }`}
                href={`/profile/${userByNickname.nickname}/favorites`}
              >
                Favorites
              </a>
            </li>
          </ul>
        </nav>

        {userByNickname.id === currentUser?.id ? (
          <a
            className={`font-condensed text-3xl uppercase text-stormDust hover:text-white md:text-4xl lg:text-6xl  ${
              isCurrentPage(`/profile/${userByNickname.nickname}/edit`) &&
              "!text-icterine"
            }`}
            href={`/profile/${userByNickname.nickname}/edit`}
          >
            Edit My Profile
          </a>
        ) : (
          <ul className="flex gap-8 text-stormDust">
            {userByNickname.github && (
              <li>
                <a
                  href={userByNickname.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="github" />
                </a>
              </li>
            )}
            {userByNickname.facebook && (
              <li>
                <a
                  href={userByNickname.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="facebook" />
                </a>
              </li>
            )}
            {userByNickname.youtube && (
              <li>
                <a
                  href={userByNickname.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="youtube" />
                </a>
              </li>
            )}
            {userByNickname.linkedin && (
              <li>
                <a
                  href={userByNickname.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="linkedin" />
                </a>
              </li>
            )}
            {userByNickname.twitter && (
              <li>
                <a
                  href={userByNickname.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-icterine"
                >
                  <Icon size={42} id="twitter" />
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export { ProfileHeader };
