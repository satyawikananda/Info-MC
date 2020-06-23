const webPush = require('web-push');

const vapidKeys = {
  publicKey:
    'BEaRB_LxsLYz7f-I8atJknT2oVqCtBmMxOplzi7Epz80Cy5ZctOP_p3fCcW3cgKtDb85snp8cRVfCbCYxVj-lHQ',
  privateKey: 'VC0UhMhmilOMZctULmu0HKTNr_SXrr2B6JJ5Pbs-0fY',
};

webPush.setVapidDetails(
  'mailto:satyawikananda456@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

const pushSubs = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fRWiJFekEv0:APA91bHgVCLLqHuQr7HNAgPGAMx4z14uzStx4aVjlMeUrcT7tOTRt_5jdZ3uGiNQos8iwQuc8sjR0eco3IkLwXADUKqqZwpXtVGNz0I7B4d0kerGssUULiehxNem0xrRBCvvIqonP5CZ',
  keys: {
    p256dh:
      'BAo7IpIFwKtqKHroRK33DYoQ/fcQi82WT0Fjm/x2rxkM3rs/sULUGB1wLOgPI+MN61/Kz3y9EBZViod5aZNvm4E=',
    auth: 'eGivhxsi2al6smJC8n6oGA==',
  },
};

const payload = 'City till will die 🔥 !!!';

const options = {
  gcmAPIKey: '803816201455',
  TTL: 60,
};

webPush.sendNotification(pushSubs, payload, options);
