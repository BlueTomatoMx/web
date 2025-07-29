"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Timer } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export function Pomodoro() {
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(100);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const timeSettings = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  const resetTimer = useCallback((newMode: 'pomodoro' | 'shortBreak' | 'longBreak') => {
    setIsActive(false);
    setMode(newMode);
    setTime(timeSettings[newMode]);
    setProgress(100);
  }, []);

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem('pomodoroTasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
    }

    if (typeof window !== 'undefined') {
        audioRef.current = new Audio('/notification.mp3');
    }

    resetTimer('pomodoro');
  }, [resetTimer]);

  useEffect(() => {
    localStorage.setItem('pomodoroTasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setProgress((time / timeSettings[mode]) * 100);
      }, 1000);
    } else if (time === 0) {
      if (audioRef.current) {
        audioRef.current.play();
      }
      setIsActive(false);
      if (mode === 'pomodoro') {
        resetTimer('shortBreak');
      } else {
        resetTimer('pomodoro');
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, time, mode, resetTimer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section id="pomodoro" className="w-full py-24 sm:py-32 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl flex items-center justify-center gap-2">
                <Timer className="h-8 w-8 text-primary group-hover:text-accent" />
                Herramienta Pomodoro
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Usa esta herramienta para mantenerte enfocado. Trabaja en ráfagas de 25 minutos con pequeños descansos.
            </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Temporizador</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6">
                    <Tabs defaultValue="pomodoro" onValueChange={(value) => resetTimer(value as any)} className="w-full">
                        <TabsList className="flex flex-col sm:flex-row h-auto sm:h-12 p-1 w-full [&>button]:w-full">
                            <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
                            <TabsTrigger value="shortBreak">Descanso Corto</TabsTrigger>
                            <TabsTrigger value="longBreak">Descanso Largo</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className={cn("text-8xl font-bold tracking-tighter", isActive ? "text-accent" : "text-primary")}>
                        {formatTime(time)}
                    </div>
                     <div className="w-full">
                        <Progress value={progress} className={cn(isActive ? "[&>div]:bg-accent" : "[&>div]:bg-primary")} />
                    </div>
                    <Button onClick={() => setIsActive(!isActive)} size="lg" className="w-full">
                        {isActive ? 'Pausar' : 'Iniciar'}
                    </Button>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Lista de Tareas</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 mb-4">
                        <Input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                            placeholder="Añadir una nueva tarea..."
                        />
                        <Button onClick={handleAddTask}>Añadir</Button>
                    </div>
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                        {tasks.length > 0 ? tasks.map((task) => (
                            <div key={task.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50">
                                <Checkbox
                                    id={`task-${task.id}`}
                                    checked={task.completed}
                                    onCheckedChange={() => toggleTask(task.id)}
                                />
                                <label
                                    htmlFor={`task-${task.id}`}
                                    className={`flex-1 text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                                >
                                    {task.text}
                                </label>
                                <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                                </Button>
                            </div>
                        )) : (
                            <p className="text-center text-sm text-muted-foreground py-4">Aún no hay tareas. ¡Añade una para empezar!</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
