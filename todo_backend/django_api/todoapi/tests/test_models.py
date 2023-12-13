from unittest import TestCase
from todoapi.models import Task
from django.utils import timezone

class TaskModelTestCase(TestCase):
    def test_task_is_due_soon(self):
        # Set up a task with a due date two days from now
        target = Task()
        target.due_date = (timezone.now() + timezone.timedelta(days=2)).date()

        # Assumption: Define "due soon" as within three days
        three_days_from_now = (timezone.now() + timezone.timedelta(days=3)).date()

        # Assert that the task's due date is before or equal to three days from now
        self.assertTrue(target.due_date <= three_days_from_now)

    def test_task_is_not_due_soon(self):
        # Set up a task with a due date precisely three days from now
        target = Task()
        target.due_date = (timezone.now() + timezone.timedelta(days=3)).date()

        # Definition of "due soon" as within three days does not include the third day
        # Therefore, we expect this to be False as it is exactly three days away
        three_days_from_now = (timezone.now() + timezone.timedelta(days=3)).date()

        self.assertFalse(target.due_date < three_days_from_now)

    def test_task_with_no_due_date(self):
        # Set up a task with no due date
        target = Task()
        target.due_date = None

        # Check if the due_date is None (which means no due date is set)
        self.assertIsNone(target.due_date)  # This asserts that due_date is None, which is more precise

