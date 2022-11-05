import { Badge } from "./badge.model"

export class BadgeService {

    badges: Badge[] = [
        new Badge(1,"Two Day Shipping", "You ordered a product from Amazon.com using Prime Two-Day Shipping","assets/icons/badge.svg","November 2 2022"),
        new Badge(2,"Whole Foods Shopper", "You earned 5% cash back while shopping at Whole Foods","assets/icons/badge.svg","Not yet earned"),
        new Badge(3,"Student Universe Flyer", "You saved up to 10% by booking a flight with Student Universe","assets/icons/badge.svg", "October 31 2022"),
        new Badge(4,"Student Universe Flyer", "You saved up to 10% by booking a flight with Student Universe","assets/icons/badge.svg", "October 31 2022"),
        new Badge(5,"Student Universe Flyer", "You saved up to 10% by booking a flight with Student Universe","assets/icons/badge.svg", "October 31 2022"),
        new Badge(6,"Two Day Shipping", "You ordered a product from Amazon.com using Prime Two-Day Shipping","assets/icons/badge.svg","November 2 2022"),
        new Badge(7,"Whole Foods Shopper", "You earned 5% cash back while shopping at Whole Foods","assets/icons/badge.svg","Not yet earned"),
        new Badge(8,"Student Universe Flyer", "You saved up to 10% by booking a flight with Student Universe","assets/icons/badge.svg", "October 31 2022"),
        new Badge(9,"Student Universe Flyer", "You saved up to 10% by booking a flight with Student Universe","assets/icons/badge.svg", "October 31 2022"),
        new Badge(10,"Student Universe Flyer", "You saved up to 10% by booking a flight with Student Universe","assets/icons/badge.svg", "October 31 2022")
    
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