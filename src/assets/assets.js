import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import rating_starts from './rating_starts.png'
import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon
}

export const menu_list = [
    {
        menu_name: "Hearty",
        menu_image: menu_1
    },
    {
        menu_name: "Fresh",
        menu_image: menu_2
    },
    {
        menu_name: "Paw-fast",
        menu_image: menu_3
    }]

export const food_list = [
    {
        food_id: 1,
        food_name: "Yam-mazing Bowl",
        food_image: food_1,
        food_price: 12,
        food_desc: "Sweet potato, squash, beans, rice",
        food_category: "Hearty"
    },
    {
        food_id: 2,
        food_name: "Life's A Garden Bowl",
        food_image: food_2,
        food_price: 18,
        food_desc: "Carrots, celery, beets, rice",
        food_category: "Fresh"
    }, {
        food_id: 3,
        food_name: "Eggsquisite Veggies",
        food_image: food_3,
        food_price: 16,
        food_desc: "Eggs, spinach, bell peppers, broccoli",
        food_category: "Paw-fast"
    }
]
