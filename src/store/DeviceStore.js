import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Phones'},
            {id: 2, name: 'Tv-s'},
            {id: 3, name: 'PlayStations'},
            {id: 4, name: 'NetBooks'}
        ]
        this._brands = [
            {id: 1, name: 'Xiaomi'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Samsung'},
            {id: 4, name: 'Lenovo'},
            {id: 5, name: 'LG'},
            {id: 6, name: 'Oppo'},
            {id: 7, name: 'Google'},
            {id: 8, name: 'Pixel'},
            {id: 9, name: 'Acer'},
            {id: 10, name: 'Huawei'},
            {id: 11, name: 'Asus'},
            {id: 12, name: 'Honor'},
            {id: 13, name: 'Bosh'},
            {id: 14, name: 'Rondel'},
            {id: 15, name: 'Philips'}
    ]
        this._devices = [
            {id: 1, name: 'Mi 10t Pro', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 2, name: 'Mi 11 Ultra', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 3, name: 'Iphone 12 Pro Max', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 4, name: 'Iphone 11 Pro ', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 5, name: 'S21', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 6, name: 'MI 4 A Pro 43 (Universal)', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 7, name: 'Iphone 8 Pro ', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 8, name: 'S31', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'},
            {id: 9, name: 'MI 8 Ultra', price: 2500, rating: 5, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677f14e2-9bf3-4c8e-86bc-58c0cc69d36f/d4zl3hd-0eec649b-329a-43cc-a3f6-82dd12c0a4c3.jpg/v1/fill/w_1024,h_724,q_75,strp/uchiha_itachi_by_tobeyd-d4zl3hd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82NzdmMTRlMi05YmYzLTRjOGUtODZiYy01OGMwY2M2OWQzNmYvZDR6bDNoZC0wZWVjNjQ5Yi0zMjlhLTQzY2MtYTNmNi04MmRkMTJjMGE0YzMuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTcyNCJ9XV19.WHmHfGnpYBzBWAWLXSj1cuzkkYbTvcpnw1MVIqYoTbs'}
    ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevice(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}