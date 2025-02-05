# 线程学习

## 1.进程与线程
- __进程：__ 是执行在内存中的应用程序。
- __线程：__ 是线程中最小的执行单位。一个进程中至少得有一个线程。

## 2.并行与并发
* 并行：在同一时刻，有多个程序在多个cpu上执行。
* 并发：在同一时刻，有多个程序在单个cpu上（交替）执行。

## 3.创建线程
- __方法一：__ 定义继承Thread类的子类。该子类应重写类 Thread 的 run 方法。然后可以分配并启动子类的实例.
```js
class PrimeThread extends Thread {
    public void run () {
        // 编写线程任务
    }
}
// 下面的代码将创建一个线程并开始运行：
PrimeThread p = new PrimeThread()
p.start()
```
- __方法二：__ 声明一个实现 Runnable 接口的类。然后该类实现 run 方法。然后可以分配该类的实例，在创建 Thread 时作为参数传递并启动。
```js
class PrimeRun implements Runnable {
    public void run() {
        // 编写线程任务
    }
}
// 下面的代码将创建一个线程并开始运行：
PrimeRun p = new PrimeRun()
new Thread(p).start()
```
- __方法三：__ 实现 Callable\<V> 接口。实现 Call 方法。
* 与 Runnable 接口中 run 方法区别：call方法会传入范型，返回值类型为范型类型。
```js
public class PrimeCall implements Callable<String> {
    public String call() {
        return "call 线程执行了";
    }
}

// 下面的代码将创建一个线程并开始运行：
PrimeCall c = new PrimeCall();
// V - 此 FutureTask 的 get 方法返回的结果类型
FutureTask<String> futureTask = new FutureTask<>(call);
new Thread(futureTask).start()
System.out.println(futureTask.get());
```
- __方法四：__ 线程池，使用 Executors 类
* 创建线程池对象：
static ExecutorService newFixedThreadPool(int nThreads)

* 执行线程任务: 
1) 提交一个 Runnable 任务以供执行并返回一个代表该任务的 Future。
* Future<?> submit(Runnable task)
2) 提交一个有返回值的任务以供执行，并返回一个代表任务未决结果的 Future。
* Future\<T> submit(Callable\<T> task)


```js
// 创建线程池对象
ExecutorService es = Executors.newFixedThreadPool(2);
// 执行线程任务
es.submit(new MyRunnable())
// Callable 方式 MyCallable是自定义实现Callable接口
// 返回值是Future接口， f.get() 获取call方法返回值
Future f = es.submit(new MyCallable())
f.get()

// 启动有序关闭，其中执行先前提交的任务，但不会接受新任务。
es.shutdown()

```

## 4.常用方法
* Thread.sleep(long millis): 使当前线程进入休眠状态，millis 休眠时间。线程休眠不是释放线程锁对象，此时其他线程抢不到线程对象，超出设置休眠的时间，自动继续执行。
* Object.wawit(long millis): 使当前线程进入等待状态，millis 等待时间。线程等待会释放线程锁对象，此时其他线程可以抢到线程对象，超出设置等待时间或被唤醒，当前线程会重新抢线程锁，继续执行当前线程。
* Object.wait(): 使当前线程无限等待。
* Object.notify(): 唤醒进入等待状态的线程，若有多个等待状态的线程，notify随机唤醒一个等待状态的线程。
* Object.notifyAll(): 唤醒所有等待状态的线程。 

## 5.线程安全问题
* 出现线程安全问题原因：多个线程同时访问了同一个资源。
* 解决方法：synchronized 关键字， 可以定义 synchronized 代码块，也可以定义使用 synchronized 修饰的方法（同步方法）,也可以使用Lock接口。
```js
synchronized(任意对象) {

}

synchronized 方法名(锁对象) {
    // 默认是 this
}
static synchronized(锁对象) {
    // 默认是 class对象
}

// Lock接口，实现 ReentrantLock 类
Lock lock = new ReentrantLock()
// 获取锁
lock.lock()
// 释放锁
lock.unlock()
```