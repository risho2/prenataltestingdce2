window.onload = function() {
    document.getElementById('consentButton').addEventListener('click', function() {
        // GoogleフォームのURLリスト
        var forms = [
            "https://docs.google.com/forms/d/e/1FAIpQLSe0husm3YMPwc1iPoWXZC4PI8ZCQlJX84gzsyh-y-4m2Uu2OA/viewform?usp=sf_link",
            "https://docs.google.com/forms/d/e/1FAIpQLSdlXhlMS-ZY_aHszvTBAKQBwBc7S9Vzp0y9eMbgnDDVeDv4uA/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLScow7vdv47rHXfxSnKJVsC4G5A1LqOtkvV6G8tQ6cRSYESzBw/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSeMgSjTFW65omoB6lCnEr4eukgoMrvTcnaf9Ai1OPighJG7jQ/viewform?usp=header",
            "https://docs.google.com/forms/d/e/1FAIpQLSdj2MGcIfWfm5SkfJB-TdUPqUBhE-Hh9e2MEUlC1AsQZg3bmQ/viewform?usp=header"
        ];

        // ランダムなURLを選択
        var randomIndex = Math.floor(Math.random() * forms.length);
        var randomFormUrl = forms[randomIndex];

        // 選択されたURLにリダイレクト
        window.location.href = randomFormUrl;
    });
};
