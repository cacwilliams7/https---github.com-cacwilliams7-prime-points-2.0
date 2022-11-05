import { Badge } from "./badge.model"

export class BadgeService {

    badges: Badge[] = [
        new Badge(1,"Two Day Shipping", "You ordered a product from Amazon.com using Prime Two-Day Shipping","assets/Badge Icons/shopping badge.png","November 2 2022"),
        new Badge(2,"Linkedin", "You made connections","assets/Badge Icons/linkedin-unlocked.png", "October 31 2022"),

        new Badge(3,"Grubhub", "You saved by paying $0 in delivery fees with GrubHub+","assets/Badge Icons/grubhub-unlocked.png","Not yet earned"),
        new Badge(4,"Two Day Shipping", "You ordered a product from Amazon.com using Prime Two-Day Shipping","assets/Badge Icons/shopping-locked.png","November 2 2022"),


        new Badge(5,"Grubhub", "You saved by paying $0 in delivery fees with GrubHub+","assets/Badge Icons/grubhub-locked.png", "October 31 2022"),
        new Badge(6,"Course Hero", "You used course hero","assets/Badge Icons/coursehero-locked.png", "October 31 2022"),

        new Badge(7,"Whole Foods Shopper", "You earned 5% cash back while shopping at Whole Foods","assets/Badge Icons/groceries-unlocked.png","November 2 2022"),
        new Badge(8,"Course Hero", "You used course hero","assets/Badge Icons/coursehero-unlocked.png", "October 31 2022"),    

        new Badge(9,"Linkedin", "You made connections","assets/Badge Icons/linkedin-unlocked.png", "October 31 2022"),
        new Badge(10,"Whole Foods Shopper", "You earned 5% cash back while shopping at Whole Foods","assets/Badge Icons/groceries-locked.png","Not yet earned"),

      ]

    badgeInQuestion: Badge[] = []

    getBadgeList() {
        return this.badges
    }

    getBadgeInQuestion() {
        return this.badgeInQuestion[0]
    }

    setBadgeInQuestion(badge: Badge) {
        this.badgeInQuestion[0] = badge
    }
}