import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const getRelativeTime = (dateString: string): string => {
  dayjs.extend(relativeTime);
  return dayjs(dateString).fromNow();
};
