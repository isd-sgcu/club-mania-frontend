from actions import generate_club_docs, update_static_info


def main():
    actions = [
        {'name': 'update static info', 'func': update_static_info},
        {'name': 'generate club docs to Firestore', 'func': generate_club_docs}
    ]

    print('Select action')
    for i, action in enumerate(actions, 1):
        print(i, action['name'])
    actions[int(input(': ')) - 1]['func']()


if __name__ == '__main__':
    main()
