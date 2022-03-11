import Head from 'next/head'
import * as React from 'react';
import {TasksDocument, TasksQuery, useTasksQuery} from "../generated/graphql-frontend";
import TaskList from "../components/TaskList";
import CreateTasksForm from "../components/CreateTasksForm";
import initializeApollo from "../lib/client";

export default function Home() {
  const result = useTasksQuery();
  const tasks = result.data?.tasks;

  return (
    <div>
      <Head>
        <title>Tasks</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <div>
          <CreateTasksForm onSuccess={result.refetch}/>
          {result.loading ? (
              <p>Loading tasks... </p>
          ) : result.error ? (
              <p>An error occured</p>
          ) : tasks && tasks.length > 0 ? (
              <TaskList tasks={tasks}/>
          ) : (
            <p className="no-tasks-message">You&apos;ve got no tasks</p>
          )}
      </div>
    </div>
  )
};





