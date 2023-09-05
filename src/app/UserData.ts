interface UserData {
  login: string;
  location: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  public_repos: number;
  twitter_username: string;
  company: string | null;
  blog: string;
  name: string;
  html_url: string;
  bio: null | string;
}

export default UserData;
