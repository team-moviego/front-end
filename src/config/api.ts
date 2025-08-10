const API_URL = process.env.NEXT_PUBLIC_API_URL;

//API 엔드포인트
export const API_ENDPOINT = {
  user: {
    signup: `${API_URL}/members/member/signup`,
    signin: `${API_URL}/members/member/signin`,
    signout: `${API_URL}/members/member/signout`,
    checkId: (userId: string) => `${API_URL}/members/member/id/${userId}`,
    checkEmail: (userEmail: string) =>
      `${API_URL}/members/member/email/${userEmail}`,
  },
};
