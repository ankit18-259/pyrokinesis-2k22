from django.db import models

from wagtail.core.fields import RichTextField
from wagtail.core.models import Page

from wagtail.api import APIField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel

class RootPage(Page):
    pass

class EventPage(Page):
    EventName = models.CharField(max_length = 100, blank = False, null = True)
    EventDate = models.DateTimeField()
    BannerImage = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, null=True)
    Description = RichTextField()

    api_fields = [
        APIField('title'),
        APIField('EventName'),
        APIField('EventDate'),
        APIField('BannerImage'),
        APIField('Description'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('EventName'),
        FieldPanel('EventDate'),
        ImageChooserPanel('BannerImage'),
        FieldPanel('Description'),
    ]

    