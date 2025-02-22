import dayjs from "dayjs";

import { createRequire } from "module";
import Subscription from "../model/subscription.model.js";
const { serve } = require("@upstash/workflow/express");

const require = createRequire(import.meta.url);

const REMINDERS = [7, 5, 2, 1];

export const sentReminders = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId);

  if (!subscription || subscription.status !== "active") return;

  const renewalDate = dayjs(subscription, renewalDate);

  if (renewalDate.isBefore(dayjs())) {
    console.log(
      `Renewal date has passed for the subscription ${subscriptionId}. Stopping workflow.`
    );
    return;
  }

  for (const daysBefore of REMINDERS) {
    const reminderDate = renewalDate.subtract(daysBefore, "day");

    if (reminderDate.isAfter(dayjs())) {
      await sleepUntilRemider(
        context,
        `Reminder ${daysBefore} days before`,
        reminderDate
      );
    }

    await triggerReminder(context, `Reminder ${daysBefore} days before`);
  }
});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get Subscription", () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });
};

const sleepUntilRemider = async (context, label, date) => {
  console.log(`Sleeping until ${label} reminder at ${date} `);
  await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label) => {
  return await context.run(label, () => {
    console.log(`Triggering ${label} reminder.`);
  });
};
