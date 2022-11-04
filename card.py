import pickle as p
def CreateFile():
    BookNo=int(input("ENter book no:"))
    Book_name=input("enter book name:")
    Author=input("Enter Author:")
   Price =float(input("Enter price")
   l=[BookNo,Book_name,Author,Price])
  f= open(" Book.dt","ab")
    p.dump(l,f)
    f.close()
    def countrec(Author):
        count=0
        f=open("book.dt","rb")
        while True:
            try:
                l=p.load(f)
                if l[2]==Author:
                    count=count+1
                    except EOFError:
                        print("EOF reached !!")
                        break
                    return count