export default function ({ store, redirect, route }) {
    // If the user is not logged in
    if (!store.state.authUser) {
        if (route.path != '/') {
            return redirect(`/login?return_url=${route.path}`)
        }
        return redirect('/login?')
    }

    else if (store.state.authUser.status == 'inactive') {
        return redirect(`/verify_mobile`)
    }
}