const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

export async function sendFormData(data) {
    return fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
            "form-name": "painting-contact",
            'subject': "New message for Gallery site!",
            ...data
        })
    })
}
