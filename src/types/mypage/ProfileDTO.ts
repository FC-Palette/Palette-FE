export class ProfileDTO {
  phoneNumber: null;
  image: null;
  email: null;
  name: null;
  birthday: null;
  nickname: null;
  bio: string;
  sex: null;
  position: null;
  job: null;
  constructor({
    image = null,
    email = null,
    name = null,
    phoneNumber = null,
    birthday = null,
    nickname = null,
    bio = '',
    sex = null,
    position = null,
    job = null,
  }) {
    this.image = image;
    this.email = email;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.birthday = birthday;
    this.nickname = nickname;
    this.bio = bio;
    this.sex = sex;
    this.position = position;
    this.job = job;
  }
}