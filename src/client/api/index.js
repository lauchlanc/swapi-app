import { type Message, type About } from 'shared/types';

export default {
  async about(): Promise<About> {
    const response = await fetch('/api/about');
    const data = await response.json();

    const about: About = {
      about: data.about,
    };

    return about;
  },
  
  async message(): Promise<Message> {
    const response = await fetch('/api/message');
    const data = await response.json();

    const message: Message = {
      message: data.message,
    };

    return message;
  },
};
