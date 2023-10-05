export interface myPageIntroProps {
  status: number;
  success: boolean;
  response: {
    name: string;
    sex: string;
    nickname: string;
    image: string | null;
    bio: string;
    job: string;
    followed: string;
    position: string;
    building: string;
    wing: string;
    birthday: number;
    roomNumber: string;
    followedCount: number;
    followingCount: number;
  };
  error: any;
}