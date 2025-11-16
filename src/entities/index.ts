/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: involvementopportunities
 * Interface for InvolvementOpportunities
 */
export interface InvolvementOpportunities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  opportunityName?: string;
  /** @wixFieldType text */
  targetAudience?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  fullDescription?: string;
  /** @wixFieldType text */
  howToGetInvolved?: string;
  /** @wixFieldType text */
  contactEmail?: string;
  /** @wixFieldType url */
  applicationUrl?: string;
  /** @wixFieldType image */
  heroImage?: string;
}


/**
 * Collection ID: mediaresources
 * Interface for MediaResources
 */
export interface MediaResources {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  resourceName?: string;
  /** @wixFieldType text */
  resourceDescription?: string;
  /** @wixFieldType text */
  resourceType?: string;
  /** @wixFieldType url */
  downloadUrl?: string;
  /** @wixFieldType image */
  previewImage?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
}


/**
 * Collection ID: oamxevents
 * Interface for OAMxEvents
 */
export interface OAMxEvents {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  eventName?: string;
  /** @wixFieldType text */
  eventType?: string;
  /** @wixFieldType text */
  eventCategory?: string;
  /** @wixFieldType text */
  eventTheme?: string;
  /** @wixFieldType datetime */
  eventStartDate?: Date | string;
  /** @wixFieldType datetime */
  eventEndDate?: Date | string;
  /** @wixFieldType text */
  eventLocation?: string;
  /** @wixFieldType text */
  eventDescription?: string;
  /** @wixFieldType image */
  eventBannerImage?: string;
  /** @wixFieldType url */
  scheduleUrl?: string;
  /** @wixFieldType url */
  sponsorshipOpportunitiesUrl?: string;
  /** @wixFieldType url */
  registrationUrl?: string;
}


/**
 * Collection ID: teammembers
 * Interface for TeamMembers
 */
export interface TeamMembers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  role?: string;
  /** @wixFieldType image */
  profilePicture?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType url */
  linkedinUrl?: string;
  /** @wixFieldType text */
  email?: string;
}
