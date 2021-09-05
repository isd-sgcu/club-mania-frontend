import requests


# club route is the key of each club
def get_club_route(clubname_en: str):
    return '-'.join(
        clubname_en.lower().replace(',', '').split())


def download_contact_list_csv():
    url = 'https://docs.google.com/spreadsheets/u/1/d/1l8FlP4FULZFxI9df-XwpmHG1_gK3OOPFqg3Uwpf4XeM/export?format=csv'
    return download_csv(url)


def download_csv(url: str):
    return requests.get(url).content.decode('utf-8').splitlines()
