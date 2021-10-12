import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const MeetupTitle = {
  data() {
    return {
      meetupId: '1',
      meetupTitle: '',
    };
  },
  async created() {
    await this.loadMeetupInfo(this.meetupId);
  },
  watch: {
    async meetupId(newValue, oldValue) {
      if (newValue !== oldValue) {
        await this.loadMeetupInfo(newValue);
      }
    },
  },
  methods: {
    async loadMeetupInfo(id) {
      const meetup = await fetchMeetupById(id);
      this.meetupTitle = meetup.title;
    },
  },
};

createApp(MeetupTitle).mount('#app');
