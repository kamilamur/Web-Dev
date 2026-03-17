from models import Animal, Dog, Cat
def main():
    animal1 = Animal("Animal", 5, "gray")
    dog1 = Dog("Sharik", 4, "brown", "Labrador")
    cat1 = Cat("Bonya", 1, "white", True)
    animals = [animal1, dog1, cat1]
    for a in animals:
        print(a)
        print(a.eat())
        print(a.sleep())
        print(a.speak())
        print("-----")
    print(dog1.fetch())
    print(cat1.climb())
if __name__ == "__main__":
    main()