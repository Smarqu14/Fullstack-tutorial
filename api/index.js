import express from 'express';
import data from '../src/testData.json';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({
    contests: contests,
  });
});
router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description =
    'Occaecat dolor id eiusmod sit non adipisicing ipsum consectetur irure eiusmod dolore culpa incididunt magna. Sint cupidatat eiusmod mollit nulla incididunt cillum duis nisi quis incididunt qui fugiat aliquip id. Velit veniam nostrud pariatur irure cillum sint laborum ad. Ut reprehenderit consectetur exercitation laborum proident aute dolore ad ipsum exercitation. Ex laborum consectetur ipsum dolore aliqua occaecat aliqua. Incididunt laborum deserunt labore ipsum deserunt ipsum aliquip exercitation irure veniam ad amet. Consequat nulla cupidatat incididunt et labore enim aliquip eiusmod dolor incididunt dolore.';
  res.send(contest);
});

export default router;
