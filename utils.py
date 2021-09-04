# club route is the key of each club
def get_club_route(clubname_en: str):
    return '-'.join(
        clubname_en.lower().replace(',', '').split())
