export interface myPageIntroProps {
  status: number;
  success: boolean;
  response: {
    nickname: string;
    image: string | null;
    bio: string;
    job: string;
    followd: string;
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