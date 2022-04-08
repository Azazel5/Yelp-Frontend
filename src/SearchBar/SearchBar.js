import React from 'react'

export default function SearchBar() {
    return (
        <div class="field has-addons">
            <p class="control">
                <button class="button is-static is-medium">
                    Search
                </button>
            </p>
            <p class="control">
                <input class="input is-medium" type="text" placeholder="burgers, barbers, spas, handymen" />
            </p>
            <p class="control">
                <button class="button is-static is-medium">
                    NEAR
                </button>
            </p>
            <p class="control">
                <input class="input is-medium" type="text" placeholder="Where" />
            </p>
        </div>
    )
}