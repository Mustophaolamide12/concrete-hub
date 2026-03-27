export interface TeamMember {
  id: number;
  name: string;
  initials: string;
  role: string;
  description: string;
  avatar: string;
  gradient: string;
  socials: {
    x: string;
    xUrl: string;
  };
  activity: string[];
  whyFollow: string;
  whatTheyDo: string;
}
