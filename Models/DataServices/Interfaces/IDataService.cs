using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models {
    internal interface IDataService<T, TKey> {
        IEnumerable<T> GetAll();
        T GetById(TKey id);
        // Create, read, update, remove
        bool Create(T entity);
        bool Update(T entity);
        bool Delete(TKey id);
    }
}
